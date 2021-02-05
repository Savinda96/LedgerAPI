1. First download the files from GIT repository
2. Make sure NodeJS install in your system
3. Open the terminal in your downloaded directory insert 
	-npm install
4. To start the sever type - npm start
5. To run the unit tests type - npm run test
6. Endpoint : http://localhost:3000/ledger
7. Query parameter details
	Starting date - start
	Ending date - end
	Amount- amount
	Frequency-fq
	Time Zone - tz
8. Example request URL : http://localhost:3000/ledger?start=2020-03-31T00:00:00.000Z&end=2020-06-29T00:00:00.000Z&amount=555&fq=FORTNIGHTLY&timezone=Indian/Maldives
9. To run the validation test 
	npm run test test/validation.test.js
10. To run the calculator test
	npm run test test/calc.test.js      

