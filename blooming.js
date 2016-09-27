var http = require('http')
var cheerio = require('cherrio')

url = 'http://www.imooc.com/learn/348'

function filterChapters(html){
	var $ = cherrio.load(html)
	var chapters = $('.learchapter')

	var courseData = []
	chapters.each(function(item){
		var chapter = $(this)
		var chapterTitle = chapter.find
	})
}

http.get(url, function(res){
	var html = ''

	res.on('data',function(data){
		html += data

	})

	res.on('end',function(data){
		console.log(html)
	})
}).on('error', function(){
	console.log('error');
})
