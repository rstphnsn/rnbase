.PHONY: start run-ios

start:
	npm start

run-ios:
	rm -rf ios/build/; kill $(lsof -t -i:8081); react-native run-ios

