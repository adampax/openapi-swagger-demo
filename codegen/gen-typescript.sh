java -jar ./codegen/swagger-codegen-cli-v231.jar generate \
 --input-spec http://localhost:10010/swagger \
 --lang typescript-angular \
 --output ./codegen/lyricsapi \
 --config ./codegen/ts-config.json