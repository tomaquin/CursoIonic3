import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {

  db: SQLiteObject = null;

  constructor(public sqlite: SQLite) {
    console.log('Hello DbProvider Provider');
  }

  // abrimos la conexión con la bd
  public openDb(){
    return this.sqlite.create({
      name: 'data.db',
      location: 'default' // el campo location es obligatorio
    })
      .then((db: SQLiteObject) => {
        this.db =db;
      })
  }

  // creamos nuestra tabla de sitios
  public createTableSitios(){
    return this.db.executeSql("CREATE TABLE IF NOT EXISTS sitios( id INTEGER PRIMARY KEY AUTOINCREMENT, lat FLOAT, lng FLOAT, address TEXT, description TEXT, foto TEXT )",{})
  }

  // función para insertar un sitio
  public addSitio(sitio){
    let sql = "INSERT INTO sitios (lat, lng, address, description, foto) " +
              "VALUES (?, ?, ?, ?, ?)";
    return this.db.executeSql(sql,[sitio.lat, sitio.lng, sitio.address, sitio.description, sitio.foto]);
  }

  // función para devolver los sitios guardados
  public getSitios(){
    let sql = "SELECT * FROM sitios";
    return this.db.executeSql(sql,{});
  }
}
