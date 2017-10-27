var todos = /** @class */ (function () {
    function todos(item, status, id) {
        this.item = item;
        //this.price=price;
        this.status = status;
        this.id = id;
    }
    todos.prototype.add = function (list) {
        this.item.push(list.item);
        // this.price.push(list.price);
        this.id.push(list.id);
        this.status.push(list.status);
    };
    todos.prototype.display = function () {
        for (var i = 0; i < this.item.length; i++) {
            console.log("items " + this.item[i] + " ");
            // console.log(`price ${this.price[i]}`);
            console.log("status " + this.status[i] + " ");
            console.log("id " + this.id[i]);
        }
    };
    return todos;
}());
var nextid;
nextid = 1;
var lists = new todos(["ASD"], [true], [nextid]);
//nextid++;
function additem(item, status) {
    nextid++;
    console.log(nextid);
    lists.add({
        item: item,
        // price: price,
        status: status,
        id: nextid
    });
}
function displayItem() {
    console.clear();
    lists.display();
}
