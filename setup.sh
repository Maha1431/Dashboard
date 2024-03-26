# Setup file to upload data to MongoDB 
mongo test --eval "db.dropDatabase()" 
mongoimport -d test -c Users --file data/export_test_users.json
mongoimport -d test -c Products --file data/export_test_products.json
mongoimport -d test -c Carts --file data/export_test_order.json
mongoimport -d test -c Comments --file data/export_test_comments.json