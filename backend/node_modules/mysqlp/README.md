# mysqlp

A node mysql wrapper with promises for coffeescript

## Install

`npm install mysqlp`

or

`npm install jmsegrev/mysqlp`

## Usage

### Configuration

```CoffeeScript
mysqlp = require 'mysqlp'

configuration =
  master:
    host: 'host_x'
    database: 'database_x'
    user: 'user_x'
    password: 'password_x'
  slave1: 
    host: 'host_x'
    database: 'database_x'
    user: 'user_x'
    password: 'password_x'
  slave2: 
    host: 'host_x'
    database: 'database_x'
    user: 'user_x'
    password: 'password_x'
  namex: 
    host: 'host_x'
    database: 'database_x'
    user: 'user_x'
    password: 'password_x'

mysqlp.config(configuration)
```

All the connection configurations will be added to a mysql.poolCluster.
The slave* connections will be fetched with the default cluster mysql.poolCluster 
selector 'RR' (Round-Robin). Any other connection configuration (e.g. master, namex, whateveryouwant )
will be used directly.

### Queries 

```CoffeeScript
# The slave mysql.cluster will be used to connect
# Slave will return the promise for the connection Round-Robin selected
mysqlp.connect('slave') 
  .then (connection) ->
    # same as mysql connection.query
    connection.query('select * from table_x where column_x = ?', [1]) 
      .spread (rows, fields) ->
        console.log rows

        # you can nest queries
        @query('select * from table_x where column_x = ?', [1]) 
          .spread (rows, fields) ->
            console.log rows

            connection.end()
```

### Transactions

```CoffeeScript
mysqlp.connect('master') 
  .then (connection) ->
  
    connection.begin () ->
      @query('SELECT * FROM table_y WHERE column_y > ?', [42]) 
        .spread (rows, fields) ->
        
          if rows.length > 0
            @query('UPDATE table_z SET column_z = ?', ['anything'])
              .spread (rows, fields) ->
              
                if rows.affectedRows is 1
                  @commit()
                else
                  @rollback() 
          else
            @rollback() 
    .finally ->
      connection.end()
```

