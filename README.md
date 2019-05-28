# WIKIPEIDA SEARCH SITE
	
	#Description
		- Searching any type of word from site. It will show you the list of data from wikipedia.
		- This site is available for seaching similar word that you typed in(suggestion)
		- Suggestion list will be changed in real time when user enter the keyboard.
		- Displaying word's contents and description.
		
		This application runs on server side and front end side (port 4000(server), port 3000)
		Wikipedia does not allows to access their data from front end side(do not know why) due to CORS reason.
		so application has to get data from back end side first and send it front end.
		
		
		#Step to run this.
		
		1. git clone the repository.
		2. npm install
			* require
				- axios
				- cors
				- express
				- fetch-jsonp
				- isomorphic-unfetch
				- react
				- nodemon
			* (optional)
				- react-dom
			
		3. cd /"repository"
		4. open bash
		5. nodemon server.js
			-Listening port 4000
		6. open other bash
		7. npm start
		
