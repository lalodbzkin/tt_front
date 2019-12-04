import { http } from './config'

export default{

	listTopics:() =>{
		return http.get('trendingTopics')
	},

	findLocation:(location) =>{
		return http.get('trendingTopics/'.concat(location))
	},

	findSubject:(word) =>{
		return http.get('subject/'.concat(word))
	},
	
	findTopic:(id) =>{
		return http.get('subject/'.concat(id))
	}

}