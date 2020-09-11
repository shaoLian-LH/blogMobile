const myRequest = (options) => {
	return new Promise((resolve, reject)=>{
		uni.request({
			url: `${options.url}`,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				uni.showToast({
					title: '获取数据失败',
					icon: 'none'
				});
				reject(err);
			}
		})
	})
}

export default myRequest;