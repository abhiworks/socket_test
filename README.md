# socket_test
Multiple node instance for single socket Event

##  Steps to install 
#### Installing Redis

      wget http://download.redis.io/redis-stable.tar.gz
      tar xvzf redis-stable.tar.gz
      cd redis-stable
      make
#### Start Redis Server
     $ redis-server
     [28550] 01 Aug 19:29:28 # Warning: no config file specified, using the default config. In order to specify a config file use 'redis-server /path/to/redis.conf'
     [28550] 01 Aug 19:29:28 * Server started, Redis version 2.2.12
     [28550] 01 Aug 19:29:28 * The server is now ready to accept connections on port 6379
    ... more logs ...
#### Check Redis Working
     $ redis-cli ping
     PONG
     
More Information available in https://redis.io/topics/quickstart

#### Install NPM packages in both instance
    user@Abhi:socket_test/chat_3000$ npm install
    > uws@0.14.5 install /var/www/test/socket_test/chat_3000/node_modules/socket.io/node_modules/engine.io/node_modules/uws
    > node-gyp rebuild > build_log.txt 2>&1 || exit 0
    more Logs..
    
     user@Abhi:socket_test/chat_3001$ npm install
    > uws@0.14.5 install /var/www/test/socket_test/chat_3000/node_modules/socket.io/node_modules/engine.io/node_modules/uws
    > node-gyp rebuild > build_log.txt 2>&1 || exit 0
    more logs..
    
#### Start node server in both instances
     user@Abhi:socket_test/chat_3000$ node index.js
     listening on *:3000
     
     user@Abhi:socket_test/chat_3001$ node index.js
     listening on *:3001
     
#### Run both server in seperate browsers 
     http://localhost:3000
     http://localhost:3001
    
    



