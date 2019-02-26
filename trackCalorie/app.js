// Storage Ctrl

//Item Ctrl

const ItemCtrl = (function(){
    // Item constractor
const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
}
    // Data / State

const data = {
    items:[],
    currentItem: null,
    tottalCalories:0
}
    // Public Methods
    return{
        getItems: function(){
            return data.items;
        },
        addItem: function(cal, name){
            let ID;
            if(data.items.length > 0){
                ID =data.items[data.items.length-1].id +1;
            } else {
                ID = 0;
            }

            cal = parseInt(cal);
            newItem = new Item(ID, name, cal);
            data.items.push(newItem);
            return newItem;
            
        },

        logData: function(){
            return data;
        }
    }
})();


//UI Ctrl
const UICtrl = (function(){

    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        nameInput:'#item-name',
        caloriesInput:'#item-calories'
    }

    // Public Methods
    return{
        getInput:function() {
            return{
                name:document.querySelector(UISelectors.nameInput).value,
                calories:document.querySelector(UISelectors.caloriesInput).value
            }
        },
        addListItem: function(newRow){
            //Create new li
            const li =document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${newRow.id}`;
            li.innerHTML = ` <strong> ${newRow.name}: </strong> <em> ${newRow.calories} Calories</em>
                             <a href="#" class="secondary-content"><i class="fa fa-pencil"></i></a>`;
            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        getSelectors: function(){
            return UISelectors;
        },
        clearFields: function(){
            document.querySelector(UISelectors.nameInput).value = '';
            document.querySelector(UISelectors.caloriesInput).value = '';
        },
        populateItemList: function(items){
            let html ='';

            items.forEach(item => {
                html += 
                `<li class="collection-item" id="item-${item.id}">
                  <strong> ${item.name}: </strong> <em> ${item.calories} Calories</em>
                  <a href="#" class="secondary-content"><i class="fa fa-pencil"></i></a>
                 </li> `
            });
             // insert list items
             document.querySelector(UISelectors.itemList).innerHTML = html; 
        }
        
    }
   
})();


// App Ctrl
const AppCtrl = (function(ItemCtrl, UICtrl){
    // Load event listeners
    const loadEventListeners = function(){
        // get getSelectors
            const UISelectors = UICtrl.getSelectors();

       // Add item event
       document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);     
    }

    // Add item submit
    const itemAddSubmit = function(e){
        // get form intut from UI controller
        const input = UICtrl.getInput();
        // check if input are valid
        if(input.calories != '' && input.name != ''){
            // add item
            const newItem = ItemCtrl.addItem(input.calories, input.name);
            UICtrl.addListItem(newItem);

            // clear fields
            UICtrl.clearFields();
        }

        e.preventDefault();
    };

    // Public Methods
    return {
        init: function(){
            
            // Fetch items fro data structure
            const items = ItemCtrl.getItems();

            // populate list with items
            UICtrl.populateItemList(items);

            //load event listeners
            loadEventListeners();

        }
    }
})(ItemCtrl, UICtrl);



// input-reset
AppCtrl.init();