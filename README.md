# meteor-react-boilerplate

Boilerplate for Meteor + React + Redux

### Folder structure
```
client/                 [automatically import in client side]
  main.js               # (client) The entrace point of client

server/                 [automatically import int server side]
  main.js               # (server) The entrace point of server

imports/                [mutually import by client or server]
  collections/          # (both) The mongo & minimogo collections and their schema
  api/
    methods/            # (both) The api to insert, remove, update or query data from database
    publications/       # (server) The publisher to publish reactive data
    interface/          # (server) The database operation in server side
  startup/
    client/             # (client) client startup configuration
    server/             # (server) server startup configuration
  ui/                   # (client) Front-end (react or etc)

private/

public/                 # Public asset, such as favicon.ico

...                     [other folder would be automatically import by both server and client side]
```