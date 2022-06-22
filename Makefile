setup:
	if [ -d "./common" ]; then \
		cd common; \
		yarn; \
		cd ..; \
	fi

	if [ -d "./backend-common" ]; then \
		cd backend-common; \
		yarn; \
		cd ..; \
	fi
	
	if [ -d "./api" ]; then \
		cd api; \
		yarn; \
		cd ..; \
	fi

	if [ -d "./app" ]; then \
		cd app; \
		yarn; \
		cd ..; \
	fi