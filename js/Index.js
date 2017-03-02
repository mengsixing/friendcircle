var CRECApp = angular.module('CRECApp', []);
CRECApp.directive('onRepeatFinishedRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    //这里element, 就是ng-repeat渲染的最后一个元素
                    scope.$emit('ngRepeatFinished');
                },1000);
            }
        }
    };
}).controller("FriendCircleController", function ($scope, $http, $timeout) {
    $scope.Header = {
        IsShow: true,
        Title:'朋友圈'
    };
    var progress = $.AMUI.progress;
    $scope.ImgDomain = "";
    $scope.currentPerson = {};
    $scope.currentCommentCircle = null;
    //评论对象
    $scope.CommentReply = {
        ReplyToCircle: {},
        ReplyToPerson: {}
    };
    $scope.List = [];
    //获取主数据
    $scope.GetData = function () {
        $http({
            method: "GET",
            params: { pKey: $scope.pKey },
            url: "/api/XXXXXX"
        }).success(function (data) {
            $scope.List = data.Data;
            $scope.currentPerson = data.CurrentPerson;
        }).error(function () {
            var data = JSON.parse( '{"Data":[{"Id":"f994ab37-4d2c-406d-b68f-e6172cac3051","ContentText":"kkk","Praises":[],"Images":[{"ImgUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488435553573&di=5149a6aef2192c1b39d0c5fa4400ba80&imgtype=0&src=http%3A%2F%2Fimg.lenovomm.com%2Fs3%2Fimg%2Fapp-img-lestore%2F5763-2015-07-08053329-1436304809010.jpg%3FisCompress%3Dtrue%26width%3D342%26height%3D513%26quantity%3D0.8%26rotate%3Dtrue%26dk%3D2","Description":null}],"Comments":[],"WriterInfo":{"Id":"add4b582-fa82-4a6f-88d7-001b22eb774b","NickName":"玉龙","Headimgurl":"http://tupian.qqjay.com/tou2/2017/0103/8c5fbe7de3972630cc10d1550913536c.jpg"},"CreatedTime":"2017-03-01 15:31:10.797"},{"Id":"4f36b717-a000-4bbf-8191-e9cc62362e38","ContentText":"sdaf","Praises":[],"Images":[{"ImgUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488435438992&di=e029e18b46a9025f08c158e99001f041&imgtype=0&src=http%3A%2F%2Fimage16-c.poco.cn%2Fmypoco%2Fmyphoto%2F20141111%2F16%2F17525586420141111160757022.jpg%3F784x531_120","Description":null}],"Comments":[],"WriterInfo":{"Id":"add4b582-fa82-4a6f-88d7-001b22eb774b","NickName":"玉龙","Headimgurl":"http://tupian.qqjay.com/tou2/2017/0103/8c5fbe7de3972630cc10d1550913536c.jpg"},"CreatedTime":"2017-03-01 15:28:54.697"},{"Id":"5b4b2823-8765-47fd-8f37-684a882c4de9","ContentText":"asdf","Praises":[{"IsCancel":false,"NickName":"陌陌","Id":"5d21eb31-03d9-43af-91dd-2a0ba6df28c0"}],"Images":[{"ImgUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488435811591&di=f55f3aa50c1eee151a1e9daaeda3357b&imgtype=0&src=http%3A%2F%2Fwww.sinaimg.cn%2Fdy%2Fslidenews%2F4_img%2F2015_23%2F704_1644513_743506.jpg","Description":null}],"Comments":[{"NickName":"陌陌","Id":"5d21eb31-03d9-43af-91dd-2a0ba6df28c0","SayTo":null,"ContentText":"二肥"},{"NickName":"陌陌","Id":"5d21eb31-03d9-43af-91dd-2a0ba6df28c0","SayTo":null,"ContentText":"静静的"}],"WriterInfo":{"Id":"add4b582-fa82-4a6f-88d7-001b22eb774b","NickName":"玉龙","Headimgurl":"http://tupian.qqjay.com/tou2/2017/0103/8c5fbe7de3972630cc10d1550913536c.jpg"},"CreatedTime":"2017-02-16 17:30:51.223"},{"Id":"a691e693-4b0a-4b56-b3ea-3e702772f2ab","ContentText":"撒旦法","Praises":[{"IsCancel":true,"NickName":"陌陌","Id":"5d21eb31-03d9-43af-91dd-2a0ba6df28c0"}],"Images":[],"Comments":[],"WriterInfo":{"Id":"add4b582-fa82-4a6f-88d7-001b22eb774b","NickName":"玉龙","Headimgurl":"http://tupian.qqjay.com/tou2/2017/0103/8c5fbe7de3972630cc10d1550913536c.jpg"},"CreatedTime":"2017-02-14 15:23:38.130"},{"Id":"97a751c8-b4a8-41d4-8ea2-7ce946af65a0","ContentText":"删掉","Praises":[],"Images":[],"Comments":[],"WriterInfo":{"Id":"add4b582-fa82-4a6f-88d7-001b22eb774b","NickName":"玉龙","Headimgurl":"http://tupian.qqjay.com/tou2/2017/0103/8c5fbe7de3972630cc10d1550913536c.jpg"},"CreatedTime":"2017-02-14 15:21:43.513"},{"Id":"a786ce87-9f95-47c7-bca3-3f11326d4d57","ContentText":"sad撒旦法","Praises":[],"Images":[{"ImgUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488435656602&di=a787ac1e61e6dcc6b6f711a8653a428e&imgtype=0&src=http%3A%2F%2Fstatic6.photo.sina.com.cn%2Fbmiddle%2F4ca8cd818c6d8ad03ea35","Description":null},{"ImgUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489030430&di=034d368a8b478e17a2b03161f8658833&imgtype=jpg&er=1&src=http%3A%2F%2Fimg2.mingxing.com%2Fupload%2Fattach%2F2015%2F06-25%2F290981-kHNppS.jpg","Description":null},{"ImgUrl":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1488435758369&di=1078aae4783e37f728c97a5f7133354a&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20130615%2FImg378908178.jpg","Description":null}],"Comments":[],"WriterInfo":{"Id":"add4b582-fa82-4a6f-88d7-001b22eb774b","NickName":"玉龙","Headimgurl":"http://tupian.qqjay.com/tou2/2017/0103/8c5fbe7de3972630cc10d1550913536c.jpg"},"CreatedTime":"2017-02-14 15:09:40.447"},{"Id":"48544cc1-ae11-46c0-91d3-e0f8d7453d6f","ContentText":"多大","Praises":[],"Images":[],"Comments":[],"WriterInfo":{"Id":"add4b582-fa82-4a6f-88d7-001b22eb774b","NickName":"玉龙","Headimgurl":"http://tupian.qqjay.com/tou2/2017/0103/8c5fbe7de3972630cc10d1550913536c.jpg"},"CreatedTime":"2017-02-14 15:08:41.047"},{"Id":"e5998990-e930-4092-b9d5-2d7c593ca41c","ContentText":"多大","Praises":[],"Images":[],"Comments":[],"WriterInfo":{"Id":"add4b582-fa82-4a6f-88d7-001b22eb774b","NickName":"玉龙","Headimgurl":"http://tupian.qqjay.com/tou2/2017/0103/8c5fbe7de3972630cc10d1550913536c.jpg"},"CreatedTime":"2017-02-14 15:08:41.047"}],"CurrentPerson":{"Id":"5d21eb31-03d9-43af-91dd-2a0ba6df28c0","NickName":"当前用户","Headimgurl":"http://wx.qlogo.cn/mmopen/kfyEKDRrJDSbM05WbfMqdvYyaX0O7rUQeJ9TYuoR6pAoTeqjVAfLLv01hopEnGAo7Mh2vPe7Uv4AgG9zXtDrNbyC5KgyzFou/0"}}');
            $scope.List = data.Data;
            $scope.currentPerson = data.CurrentPerson;
        });
    }
    $scope.GetData();
    //打开操作面板(重复点击判断)
    $scope.ClickOperation = function ($event) {
        var opeDiv = $($event.target).parent().parent().find(".item-operation").get(0);
        if ($scope.isExitlastOpeObj) {
            if ($scope.lastOpeObj.Id == $($event.target).attr("dbid")) {
                if ($scope.lastOpeObj.count % 2 == 0) {
                    $(opeDiv).show();
                } else {
                    $(opeDiv).hide();
                }
                $scope.lastOpeObj.count += 1;
            } else {
                $scope.lastOpeObj = {
                    Id: $($event.target).attr("dbid"),
                    count: 1
                };
                $(opeDiv).show();
            }
        } else {
            $scope.lastOpeObj = {
                Id: $($event.target).attr("dbid"),
                count: 1
            };
            $scope.isExitlastOpeObj = true;
            $(opeDiv).toggle();
        }
    }
    //点击赞
    $scope.ClickZan = function (item) {
        item.IsZan = !item.IsZan;
        //发送请求
        $http({
            method: "GET",
            params: { pKey: $scope.pKey, circleId: item.Id },
            url: "/api/XXXX"
        }).success(function (data) {
            if (data) {
                //成功后显示点赞人
                if (item.IsZan) {
                    item.Praises.push({ NickName: $scope.currentPerson.NickName });
                } else {
                    item.Praises = _.filter(item.Praises, function (data) { return data.NickName != $scope.currentPerson.NickName });
                }
            } else {
                alert("操作失败!");
            }
        }).error(function () {
            //成功后显示点赞人
            if (item.IsZan) {
                item.Praises.push({ NickName: $scope.currentPerson.NickName });
            } else {
                item.Praises = _.filter(item.Praises, function (data) { return data.NickName != $scope.currentPerson.NickName });
            }
        });
    }
    //弹出评论框
    $scope.ClickComment = function (item, comment) {
        if (comment) {
            $(".comment-input").find("input").prop("placeholder", "回复" + comment.NickName + ":");
            $scope.CommentReply.ReplyToPerson = comment;
        } else {
            $(".comment-input").find("input").prop("placeholder", "回复:");
            $scope.CommentReply.ReplyToPerson = {};
        }
        $(".comment-input").show();
        $(".comment-input").find("input").focus();
        //记录评论的位置
        $scope.CommentReply.ReplyToCircle = item;
    }
    //提交评论
    $scope.SubmitComment = function () {
        var text = $("#commentText").val();
        //发送请求
        $http({
            method: "GET",
            params: { pKey: $scope.pKey, circleId: $scope.CommentReply.ReplyToCircle.Id, text: text, sayTo: $scope.CommentReply.ReplyToPerson.Id },
            url: "/api/XXXXX"
        }).success(function (data) {
            if (data) {
                $scope.CommentReply.ReplyToCircle.Comments.push({ NickName: $scope.currentPerson.NickName, ContentText: text, SayTo: $scope.CommentReply.ReplyToPerson, Id: $scope.currentPerson.Id });
                $("#commentText").val("");
                $(".comment-input").hide();
            } else {
                alert("操作失败!");
            }
        }).error(function () {
            $scope.CommentReply.ReplyToCircle.Comments.push({ NickName: $scope.currentPerson.NickName, ContentText: text, SayTo: $scope.CommentReply.ReplyToPerson, Id: $scope.currentPerson.Id });
            $("#commentText").val("");
            $(".comment-input").hide();
        });

        
    }
    //下滑获取最新的朋友圈
    $scope.slideDown = function () {
        progress.start();
        setTimeout(function () {
            progress.done();
            $scope.List = [{ Name: "最新", "ContentText": "查看最新数据", CreatedTime: "2017-2-22 12:22:25", "WriterInfo": { "Id": "add4b582-fa82-4a6f-88d7-001b22eb774b", "NickName": "玉龙", "Headimgurl": "http://tupian.qqjay.com/tou2/2017/0103/8c5fbe7de3972630cc10d1550913536c.jpg" } }].concat($scope.List);
            $scope.$apply();
            $scope.ListScroll.refresh();
        }, 2000);
    }
    //上滑获取历史的朋友圈
    $scope.slideUp = function () {
        progress.start();
        setTimeout(function () {
            progress.done();
            $scope.List = $scope.List.concat([{ Name: "历史", "ContentText": "查看历史数据", CreatedTime: "2016-2-22 12:22:25", "WriterInfo": { "Id": "add4b582-fa82-4a6f-88d7-001b22eb774b", "NickName": "玉龙", "Headimgurl": "http://tupian.qqjay.com/tou2/2017/0103/8c5fbe7de3972630cc10d1550913536c.jpg" } }]);
            $scope.$apply();
            $scope.ListScroll.refresh();
        }, 2000);
        
    }
    //初始化iscroll
    $scope.InitIscroll = function () {
        if ($scope.ListScroll) { return;}
        $scope.ListScroll = new IScroll('#wrapper', { mouseWheel: true, scrollbars: true ,click:true});
        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
        //开始滚动时事件
        $scope.ListScroll.on("beforeScrollStart", function () {
            $(".item-operation").hide();
            $(".comment-input").hide();
        });
        //滚动完成事件
        $scope.ListScroll.on("scrollEnd", function () {
            //上拉，加载历史数据
            if (-this.y >= -this.maxScrollY - 50) {
                $scope.slideUp();
            }
        });
        //绑定手释放后处理事件
        var wrapper = document.getElementById("wrapper");
        wrapper.ontouchend = function (e) {
            //上拉，刷新数据
            if ($scope.ListScroll.y > 20) {
                $scope.slideDown();
            }
        };
    }
    //查看大图
    $scope.SeeBigImg = function ($event) {
        //var currentDom = $($event.target);
        //var urlArray = [];
        //var url = currentDom.prop("src");
        //currentDom.parent().find("img").each(function(){
        //    urlArray.push($(this).prop("src"));
        //});
    }
    
    //页面渲染完成后触发事件
    $scope.$on("ngRepeatFinished", function (repeatFinishedEvent) {
        $scope.InitIscroll();
    })
    //转化为几分钟前，几小时前
    $scope.DateString = function (date) {
        if (!date)
            return;
        var now = new Date();
        //alert(now instanceof Date);
        var isDate = date instanceof Date;
        var isString = typeof (date) == "string";
        //var date = '2014-1-22 12:22:25';
        if (isString) {
            var idx = date.indexOf('.');
            if (idx > 0) {
                date = date.substring(0, idx);
            }
            var dateParm = date.replace(/-/g, "/");
            var afterSub = now - new Date(dateParm);
            //转换成各种单位的时间
            var seconds = parseInt(afterSub / 1000);
            var minutes = parseInt(afterSub / 1000 / 60);
            var hours = parseInt(afterSub / 1000 / 60 / 60);
            var days = parseInt(afterSub / 1000 / 60 / 60 / 24);
            var months = parseInt(afterSub / 1000 / 60 / 60 / 24 / 30);
            var years = parseInt(afterSub / 1000 / 60 / 60 / 24 / 30 / 12);
            if (seconds < 60 && seconds > 0) {
                return seconds + "秒前";
            } else if (minutes < 60) {
                return minutes + "分前";
            } else if (hours < 24) {
                return hours + "小时前";
            } else if (days < 31) {
                return days + "天前";
            } else if (months < 12) {
                return months + "月前";
            } else if (years >= 1) {
                return years + "年前";
            }
        }
        if (isDate) {
            var afterSub = now - date;
            //转换成各种单位的时间
            var seconds = parseInt(afterSub / 1000);
            var minutes = parseInt(afterSub / 1000 / 60);
            var hours = parseInt(afterSub / 1000 / 60 / 60);
            var days = parseInt(afterSub / 1000 / 60 / 60 / 24);
            var months = parseInt(afterSub / 1000 / 60 / 60 / 24 / 30);
            var years = parseInt(afterSub / 1000 / 60 / 60 / 24 / 30 / 12);
            if (seconds < 60 && seconds > 0) {
                return seconds + "秒前";
            } else if (minutes < 60) {
                return minutes + "分前";
            } else if (hours < 24) {
                return hours + "小时前";
            } else if (days < 31) {
                return days + "天前";
            } else if (months < 12) {
                return months + "月前";
            } else if (years >= 1) {
                return years + "年前";
            }
        }
    };
    
});