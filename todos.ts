

interface  list {
    item :string,
    status : boolean,
   // price : number,
    id :number
}

class todos{
   public item: string [];
   public status : boolean [];
 //  public price: number[];
   public id: number[];

    constructor(item: string [],status:boolean[],id: number[]){

        this.item=item;
        //this.price=price;
        this.status=status;
        this.id=id;
    }
    add(list :list){
        this.item.push(list.item);
       // this.price.push(list.price);
        this.id.push(list.id);
        this.status.push(list.status);

    }
    display() {
        for(var i=0;i<this.item.length;i++){
            console.log(`items ${this.item[i]} `);
           // console.log(`price ${this.price[i]}`);
            console.log(`status ${this.status[i]} `);
            console.log(`id ${this.id[i]}`);
        }
    }

}
var nextid:number;
nextid=1;
var lists=new todos(["ASD"],[true],[nextid]);
//nextid++;
function additem(item: string,status:boolean) {
    nextid++;
    console.log(nextid);
    lists.add({
        item:  item,
       // price: price,
        status: status,
        id:nextid

    });

}


function displayItem() {
    console.clear();
    lists.display();
}