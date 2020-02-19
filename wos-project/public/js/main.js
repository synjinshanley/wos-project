/**
 *  @author synjin, shanley (synjinshanley@gmail.com)
 *  @version 0.0.1
 *  @summary WOS project || created: 2/2/20
 *  @todo
 */

constructor(){
    this.handleOrder();
}

handleOrder() {
    let removeMe;
    document.getElementById('enter').addEventListener('click', removeMe = () => {
        this.setDateYear(document.getElementById('year').value);
        this.setDateMonth(document.getElementById('month').value);
        this.setDateDay(document.getElementById('day').value);
        this.setBuilding(document.getElementById('building').value);
        this.setRoom(document.getElementById('room').value);
        this.setOrder(document.getElementById('discrip').value);
        this.setList();
        this.setWorkOrder();
        this.setSave
    }

    setDateYear(year){
        this.dateYear = year;
    }

    setDateMonth(month){
        this.dateMonth = month;
    }

    setDateDay(day){
        this.dateDay = day;
    }

    setBuilding(building){
        this.building = building;
    }

    setRoom(room){
        this.room = room;
    }

    setOrder(order){
        this.order = order;
    }

    setList(this.dateYear, this.dateMonth, this.dateDay, this.building, this.room, this.order){
        let this.list {
            year: `${this.dateYear}`,
            month: `${this.dathMonth}`,
            day: `${this.dateDay}`,
            building: `${this.building}`,
            room: `${this.room}`,
            order: `${this.order}`
        }
    }

    setWorkOrder(this.list){
        let this.workOrder = [];
        this.workOrder.push(this.list);
    }

    setSave(){
        save = IO.unlink(`master.txt`)
        save = IO.appendfile(`master.txt, main.js`)
    }

}