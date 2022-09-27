import { Injectable} from '@angular/core';
import { Database, ref, set, list, get, onValue } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  constructor(private database: Database) { 
   
  }

  get() {
    const dbReference = ref(this.database, '/courses');
    
   return  get(dbReference);
  }
}
