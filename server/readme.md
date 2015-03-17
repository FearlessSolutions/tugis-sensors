the server is ubuntu 14.04

Installed on the server is node, postgres, postgis.

The server can be accessed at:

http://data.datafunbox.com

If you need to configure the server from scratch, SSH in and do the following:

```
// This is designed for ubuntu 14.04.
// at the creation of these instructions, ubuntu had postgres 9.3 in their maintained packages
// we will be making your database accessible to the entire world with these instructions so the database can be maintained and checked with PG admin.

// first you need to install postgres and contrib libraries
sudo apt-get update
sudo apt-get install -y postgresql postgresql-contrib postgis*


// second you need to allow access to your postgres database from external places, use a text editor to edit the postgresql.conf file
sudo nano /etc/postgresql/9.3/main/postgresql.conf

// // in this file, uncomment the listen_addresses, and set it to equal '*'
// // increase the shared mem to = half the server size, in this case, 256 (of 512 mb of ram)

// third you need to allow access to your postgres database from specific ip addresses, use a text editor to edit the pg_hba.conf file
sudo nano /etc/postgresql/9.3/main/pg_hba.conf

// // In the ipv4 section, add a new line with "host    all             all             0.0.0.0/0               md5"
// // This allows connections from any ip address, using md5 authentication

// fourth, you need to log in as the postgres user and update your password. You are currently connected as root, so
sudo su postgres
// // now you are user postgres

// // now you need to start psql
psql

// // now you need to issue a command to the database to change the password. Make sure you update <yourpasswordhere> with your password.
alter user postgres with password '<yourpasswordhere>';

// // now exit back to the root user
\q
exit

// // make sure you are the right user

// fifth you need to restart the server
sudo service postgresql restart

// // you should get an OK message. now you want to connect to your postgresql server through pg-admin just to check and make sure things are OK
// // once your entire system is running, it is probably a good idea to update the pg_hba.conf file and make the database only locally accessible. You will have services in place to update and request data from the database.
```

After your database is set up, we installed nodejs. We used the instructions from here:

specifically
```
sudo apt-get install nodejs

sudo apt-get install npm

sudo ln -s /usr/bin/nodejs /usr/bin/node
```

We are running the node app on port 3000. 3000 is proxied to 80 through nginx.

Creates script for this sample data:
```
CREATE TABLE sensors
(	date timestamp,
	sensorID varchar(4),
	temp varchar,
	humidity varchar,
	light varchar,
	sound varchar
);
````

sample data:
```
INSERT INTO sensors (date, sensorID, temp, humidity, light, sound) VALUES
	(to_timestamp(1426557525797), '1', '0','0','0','0'),
	(to_timestamp(1426557525797), '2', '0','0','0','0'),
	(to_timestamp(1426557525797), '3', '0','0','0','0')
```