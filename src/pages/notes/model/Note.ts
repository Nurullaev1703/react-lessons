import { format, formatDistanceToNow } from "date-fns"
import { ru } from "date-fns/locale"

export class NoteModel {
    private _uuid:string
    private _title:string
    private _description:string
    private _createDate:Date
    
    constructor(title:string, description:string){
        this._uuid = this.generateUuid()
        this._title = title
        this._description = description
        this._createDate = new Date()
    }

    get title(){
        return this._title
    }
    get description(){
        return this._description
    }
    get createDate(){
        return format(this._createDate, "yyyy-MM-dd", {locale: ru})
    }

    get dateDistance(){
        return formatDistanceToNow(this._createDate, {locale:ru})
    }
    private generateUuid(){
        const example = "abcdefghijklmnopqrstuvwxyz0123456789"
        let uuid = ""
        for(let i = 0; i < 16; i++){
            let random = Math.floor(Math.random() * example.length)
            uuid += example[random]
        }
        return uuid
    }
    get uuid(){
        return this._uuid
    }
}