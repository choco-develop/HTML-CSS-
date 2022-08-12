class Contractor{
    constructor(hourlyRate,hoursPerDay){
        this._hourlyRate=hourlyRate
        this._hoursPerDay=hoursPerDay
    }
    get hourlyRate (){
        return this._hourlyRate
    }
    get hoursPerDay(){
        return this._hoursPerDay
    }
    dailyInvoice(){
        return  this._hourlyRate * this._hoursPerDay
    }
}

class Front extends Contractor{
    constructor(hourlyRate,hoursPerDay,htmlHours,cssHours,javascriptHours,frameworkHours){
        super(hourlyRate,hoursPerDay)
        this._htmlHours=htmlHours
        this._cssHours=cssHours
        this._javascriptHours=javascriptHours
        this._frameworkHours=frameworkHours
    }
    get htmlHours (){
        return this._htmlHours
    }
    get cssHours(){
         return this._cssHours
    }
    get javascriptHours(){
        return this._javascriptHours
    }
    get frameworkHours(){
        return this._frameworkHours
    }
     dailyInvoice(){
       // super (dailyInvoice())
        return `daily activities for first work day is ${this.htmlHours} on html `
     }
}
class Back extends Contractor{
    constructor(hourlyRate,hoursPerDay,taskOne,taskTwo,frameworks){
        super(hourlyRate,hoursPerDay)
        this._taskOne=taskOne
        this._taskTwo=taskTwo
        this._frameworks=frameworks
    }
    get taskOne(){
        return this._taskOne
    }
    get taskTwo(){
        return this._taskTwo
    }
    get frameworks(){
        return this._frameworks
    }

}
//let AgentsDevs= new Contractor(15,8)
let foodiesWeb=new Front(15,8,5,3,0,false)
let foodiesApi=new Back(15,8,'get data','analyse data' ,'node.js')