<script>
	export default {
		onLaunch: function() {
			uni.$on('navigatorToNote', (id) => {
                uni.switchTab({
                    url: `/pages/note/index`,
                    animationType: 'slide-in-right',
                    animationDuration: 300
				});
				setTimeout(()=>{
					uni.$emit('showNote', id);
				}, 30);
			});
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style lang="scss">
	.uni-page-head__title {
		z-index: 1001 !important;
	}	

	#detail-note-main-div::-webkit-scrollbar{
        width: 5px;
        background-color: $primary-color;
    }
    #detail-note-main-div::-webkit-scrollbar-thumb{
        background-color:  $secondary-color;
    }
    .anchor-fix{
        color: black;
        pointer-events: none;
    }
    .detail-note-title h1{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 16px;
        font-weight: bold;
		padding: 10rpx 0px;
        color: black;
    }
    
    #detail-note-main-div{
        color: #886452;
        background-color: #ECE3D9;
        padding: 5px 10px;
        position: relative;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        margin: 0px 24px;
        text-align: center;
        overflow-x:hidden;
        overflow-y:auto;
        
		ul {
            margin: 10rpx 0px;
        }
        
        h2, h3, h4, h5, h6{
            font-family: STKaiti,KaiTi;
            font-size: 18px;
            line-height: 18px;
			margin: 10rpx 0px;
            color:black;
            font-weight: bold;
            pointer-events: none;
        }
        a[class*="anchor"] {
            cursor: default;
            pointer-events: none;
        }
        blockquote{
            padding-left: 10px;
            border-left: 3px solid rgba( 116, 110, 103, 0.8);
            background-color: transparent;
        }
        ul li{
            font: normal 16px/30px KaiTi,STKaiti;
            line-height: 150%;
        }
        table{
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 2px 10px;
        }
        table tr{
            border-bottom: 2px solid rgba( 116, 110, 103, 0.8);
        }
        table tr td:first-child{
            color: rgba( 116, 110, 103, 0.8);
        }
        table tr td{
            border-right: solid 2px rgba( 116, 110, 103, 0.8);
        }
        table tr td:last-child{
            border-right: none;
        }
        table th{
            font: normal 18px/18px KaiTi,STKaiti;
            text-align: center;
        }
        table td{
            font: normal 16px/16px KaiTi,STKaiti;
            text-align: left;
            height: auto;
            padding: 10px;
            min-width: 90px;
        }
        pre{
            position: relative;
            display: inline-block;
            width: 100%;
            padding: 5px 10px;
            margin: 5px 0;
			box-sizing: border-box;
            background: #201E2F;

            code {
                top: 0;
                background-color: transparent;
                width: 100%;
            }

            &::-webkit-scrollbar-track{
                background-color: #ECE3D9;
            }
            &::-webkit-scrollbar{
                border-radius: 5px;
                width: 3px;
                background-color: #ECE3D9;
            }
            &::-webkit-scrollbar-thumb{
                background-color:  rgba( 116, 110, 103, 0.4);
            }
        }
        code{
            display: inline-block;
            position: relative;
            top: 5px;
            width: auto;
            text-align: left;
            font-weight: normal;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
            line-height: 20px;
            background-color: rgba( 116, 110, 103, 0.1);
            color: #F6347A;
            padding: 2rxp 10rpx;
			overflow-x: scroll;
			overflow-y: hidden;
            span{
                line-height: 150%;
            }
        
        }
        .hljs-comment, .hljs-deletion, .hljs-meta {
            color: #F6347A;
        }
        img{
            display: inline-block;
            position: relative;
            width: 100%;
            height: auto;
            margin: 5px 0;
            padding: 0;
        }
    }

    .detail-note-body p{
        padding: 0;
        font: normal 16px/18px KaiTi,STKaiti;
    }
    .detail-note-body{
        width: 100%;
        height: auto;
        display: block;
        position: relative;
        text-align: left;
        margin-bottom: 120px;
    }
</style>
