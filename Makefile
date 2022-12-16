# Run a local dev server
serve-dev:
	find .build -delete -mindepth 1
	export ELEVENTY_ENV="development"; \
	npx @11ty/eleventy --serve

# Build the project to the .build folder
build-dev:
	find .build -delete -mindepth 1
	export ELEVENTY_ENV="development"; \
	npx @11ty/eleventy
	

# Build the production project to the .build folder
build-prod:
	find .build -delete -mindepth 1
	export ELEVENT_ENV="production"; \
	npx @11ty/eleventy
