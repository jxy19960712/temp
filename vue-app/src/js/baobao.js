import $ from 'jquery'

var baobao = {}
baobao.install = function (Vue) {
    Vue.prototype.$getDomain = (options) => {
        let domain = window.location.toString();
        let protocol;
        if (options == 'noProtocal') {
            domain = domain.replace(domain.substr(domain.indexOf('/#')), '');
            domain = domain.substr(domain.indexOf('://') + 3)
            return domain
        } else {
            return domain.replace(domain.substr(domain.indexOf('/#')), '');
        }

    }
    Vue.prototype.$logout = (options) => {
        localStorage.removeItem('controlCenter_userName');
        localStorage.removeItem('controlCenter_userId');
        localStorage.removeItem('controlCenter_userType');
        localStorage.removeItem('controlCenter_tokenCode');
        localStorage.removeItem('controlCenter_isParent');
        localStorage.removeItem('controlCenter_parentId');
        localStorage.removeItem('controlCenter_userName');
        localStorage.removeItem('controlCenter_loginSession');
    }
    Vue.prototype.$autoHeight = (options) => {
        options = $.extend({
            reference: '',
            target: '',
            content: '',
            offset: 0,
            scale: 1,
            minHeight: 0
        }, options);
        var windowHeight = $(window).height();
        var targetHeight = 0;
        var referenceHeight = $(options.reference).height();
        var contentHeight = $(options.content).height();
        var pageHeight = document.body.scrollHeight;
        var offset = Number(options.offset);

        if (referenceHeight < options.minHeight || windowHeight < options.minHeight) {
            targetHeight = options.minHeight * options.scale;

        } else if (referenceHeight > windowHeight) {
            targetHeight = referenceHeight * options.scale;
        }else if(contentHeight>windowHeight){
            targetHeight = contentHeight * options.scale;

        } else {
            targetHeight = windowHeight * options.scale + offset;
            $(window).resize(function () {
                pageHeight = document.body.scrollHeight;
                targetHeight = windowHeight * options.scale + offset;
            });
        }
        // alert(targetHeight)
        $(options.target).height(targetHeight);
    }

    Vue.prototype.$popup = (options) => {
        options = $.extend({
            container: '',
            closebtn: '',
            maskopacity: 0,
            noborder: false,
            align: false,
            widthoffset: 17,
            callback: function () {
            }
        }, options);
        var that = this,
            containerEl = $(options.container),
            thisParent = containerEl.parent(),
            contentWidth = 0,
            popupContainerEl = $('.commonPopupContainer'),
            popupWrapperEl = $('.commonPopupWrapper')
        var tools = {
            getContainerWidth: function () {
                popupContainerEl.show();
                if (options.align && Vue.prototype.$align) {
                    setTimeout(function () {
                        Vue.prototype.$align({
                            target: '.commonPopupWrapper'
                        });
                    })
                }
                if (contentWidth == 0) {
                    contentWidth = containerEl.width();
                    this.getContainerWidth();
                } else {
                    popupContainerEl.hide();
                }
            }
        }
        // popupWrapperEl = $('<div></div>').addClass('commonPopupWrapper').html('').append(containerEl),
        // popupContainerEl = $('<div></div>').addClass('commonPopupContainer')
        // $('.commonPopupContainer').detach();
        // $('body').append(popupContainerEl.append(popupWrapperEl));
        tools.getContainerWidth();
        popupWrapperEl.css({
            width: contentWidth,
            border: '10px solid rgba(153,153,153,0.5)',
            'border-radius': 10,
            transition: 'all 0.3s'
        });
        popupContainerEl.css({
            display: 'block',
            position: 'fixed',
            top: 0,
            left: 0,
            'z-index': 99999,
            width: $(window).width(),
            height: $(window).height(),
            background: 'rgba(0,0,0,' + options.maskopacity + ')'
        });
        popupContainerEl.resize(function () {
            popupContainerEl.css({
                width: $(window).width(),
                height: $(window).height(),
            });
        });
        containerEl.css({
            display: 'block'
        });
        popupWrapperEl.css({
            display: 'block',
            opacity: 1
        });
        if (popupWrapperEl.height() > $(window).height() - 20) {
            popupWrapperEl.css({
                width: (containerEl.outerWidth() + options.widthoffset),
                height: ($(window).height() - 100),
                overflow: 'auto'
            });
        }
        ;

        if (options.closebtn != '') {
            $(options.closebtn).each(function () {
                $(this).on('click', function () {
                    // $('body').append($(".commonPopupContainer"));
                    $(".commonPopupContainer").hide()
                });
            });
        }
        ;
        options.callback();
    }

    Vue.prototype.$align = (options) => {
        options = $.extend({
            position: 'both',
            target: '',
            container: '',
            positive: false,
            isImage: false,
            offsetX: 0,
            offsetY: 0,
            ignoreY: 0,
            ignoreX: 0
        }, options);

        var that = $(options.target),
            imgSrc = that.attr('src'),
            reload = false,
            container = $(options.container),
            thisWidth = 0,
            thisHeight = 0,
            containerWidth = 0,
            containerHeight = 0,
            timer,
            imageObj = new Image(),
            offsetX = Number(options.offsetX),
            offsetY = Number(options.offsetY),
            ignoreX = Number(options.ignoreX),
            ignoreY = Number(options.ignoreY),
            ignoredElX = '',
            ignoredElY = '',
            windowWidth = $(window).width(),
            windowHeight = $(window).height();
        //_this.attr('src', imgSrc + '?' + Date.parse(new Date()))
        var tools = {
            calculateIgnore: function () {
                if (typeof options.ignoreY === 'string' || typeof options.ignoreX === 'string') {
                    var ignoreArrX = options.ignoreX.split(','),
                        ignoreArrY = options.ignoreY.split(',');
                    for (var i = 0; i < ignoreArrX.length; i++) {
                        ignoreX += $(ignoreArrX[i]).width();
                    }
                    for (var i = 0; i < ignoreArrY.length; i++) {
                        ignoreY += $(ignoreArrY[i]).height();
                    }
                    ignoredElX = $(ignoreArrX.join(','));
                    ignoredElY = $(ignoreArrY.join(','));
                    console.log(ignoreY)
                } else {
                    ignoreX = options.ignoreX;
                    ignoreY = options.ignoreY;
                }
            }
        }
        initAligning();
        $(window).resize(function () {
            initAligning();
        });

        function initAligning() {
            //当居中元素是img标签时，特殊处理！
            if (that.is('img')) {
                //递归判断需要居中的图片是否加载完成，如果没有就重载
                var checkImageLoaded = function () {
                    that.each(function (index) {
                        var $this = $(options.target);
                        var imageSrc = $this.attr('src');
                        containerWidth = container.eq(index).width();
                        containerHeight = container.eq(index).height();
                        if ($this.height() <= 0) {
                            imageObj.src = imageSrc;

                            // console.log($this.outerWidth())
                            checkPosition($this, imageObj.width, imageObj.height)
                        } else {
                            checkPosition($this)
                        }
                    });
                }
                checkImageLoaded();
                //缺省情况
            } else {

                //需要遍历每个居中对象，判断其每个container尺寸不同时，需分别处理
                //当设置了container时，以container尺寸大小居中
                if (options.container != '') {
                    for (var i = 0; i < that.length; i++) {
                        var $this = $(options.target);
                        containerHeight = container.eq(i).height();
                        containerWidth = container.eq(i).width();
                        console.log(containerHeight)

                        if ($this.is(':hidden')) {
                            return true
                        } else {
                            checkPosition($this);
                        }
                    }
                    //当没有设置container时，以窗口尺寸大小居中
                } else {
                    containerWidth = $(window).width();
                    containerHeight = $(window).height();
                    that.each(function (index) {
                        var $this = $(options.target);
                        if ($this.is(':hidden')) {
                            return true
                        } else {
                            checkPosition($this);
                        }
                    });
                }
            }
        }

        function checkPosition(_this, imageWidth, imageHeight) {
            checkBrowser({
                ie: function () {
                    window.clearTimeout(timer);
                },
                other: function () {
                    clearTimeout(timer);
                }
            })

            if (arguments[1] != null && arguments[2] != null) {
                var thisWidth = imageWidth,
                    thisHeight = imageHeight;

            } else {
                var thisWidth = _this.outerWidth(),
                    thisHeight = _this.outerHeight();
            }

            switch (options.position) {
                case 'both':
                    // console.log(thisHeight)
                    var marginY = (containerHeight - thisHeight) / 2;
                    var marginX = (containerWidth - thisWidth) / 2;
                    if (options.positive && marginY < 0 || marginX < 0) {
                        marginY = marginX = 0;
                    }
                    if (thisWidth <= containerWidth) {
                        if (options.offsetX != 0) {
                            _this.css({
                                'margin': marginY + offsetY - ignoreY + 'px ' + (containerWidth - thisWidth) / 2 + offsetX - ignoreX + 'px'
                            });
                        } else {
                            _this.css({
                                'margin': marginY + offsetY - ignoreY + 'px auto'
                            });
                        }
                    } else {
                        var marginX = (containerWidth - thisWidth) / 2;
                        _this.css({
                            'margin': marginY + offsetY - ignoreY + 'px ' + (marginX + options.offsetX) + 'px'
                        });
                    }
                    break;
                case 'top':
                    aligning(function (thisWidth, thisHeight) {
                        _this.css({
                            'margin': '0 ' + ((containerWidth - thisWidth) / 2 + offsetX - ignoreX) + 'px'
                        });
                    });
                    break;
                case 'right':
                    if (thisHeight <= containerHeight) {
                        if (options.offsetY != 0) {
                            _this.css({
                                'margin': marginY + offsetY - ignoreY + 'px 0'
                            });
                        } else {
                            _this.css({
                                'margin': marginY + offsetY - ignoreY + 'px 0'
                            });
                        }
                    } else {
                        var marginX = (containerWidth - thisWidth) / 2;
                        _this.css({
                            'margin': (containerHeight - thisHeight) / 2 + offsetY - ignoreY + 'px 0'
                        });
                    }


                    // aligning(function(thisWidth, thisHeight) {
                    // 	_this.css({
                    // 		'margin': (windowHeight - thisHeight) / 2 + 'px 0 0 ' + (containerWidth - thisWidth) + 'px'
                    // 	});
                    // });
                    break;
                case 'bottom':
                    aligning(function (thisWidth, thisHeight) {
                        tools.calculateIgnore();
                        if (ignoreY <= windowHeight) {
                            _this.css({
                                'margin': (windowHeight - thisHeight + offsetY - ignoreY) + 'px auto 0'
                            });
                            console.log(ignoreY)
                            console.log(windowHeight)
                        }
                        ;
                    });
                    break;
                case 'left':
                    aligning(function (thisWidth, thisHeight) {
                        _this.css({
                            'margin': (windowHeight - thisHeight) / 2 + 'px 0 0 0'
                        });
                    });
                    break;
            }
        }

        function aligning(callback) {
            thisWidth = that.outerWidth();
            thisHeight = that.outerHeight();
            return callback(thisWidth, thisHeight);
        }

        function checkBrowser(callback) {
            callback = $.extend({
                ie: function () {
                    return;
                },
                other: function () {
                    return;
                }
            }, callback)
            if (navigator.appName.indexOf("Explorer") > -1) {
                console.log('IE')
                callback.ie();
            } else {
                // console.log('other')
                callback.other();
            }
        }

        //屏幕方向探测器
        function orientationSensor(callback) {
            var windowWidth = $(window).width(),
                windowHeight = $(window).height(),
                orientation = '';
            callback = $.extend({
                portrait: function () {
                },
                landscape: function () {
                },
                orientationchange: function (windowWidth, windowHeight) {
                }
            }, callback)

            checkoritation();
            $(window).resize(function () {
                checkoritation();
            });

            function checkoritation() {
                callback.orientationchange();
                if (windowWidth < windowHeight) {
                    return callback.portrait();
                } else {
                    return callback.landscape();
                }
            }

            return (windowWidth < windowHeight) ? orientation = 'portrait' : orientation = 'landscape';
        }
    }

}
export default baobao
