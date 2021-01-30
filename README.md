# _Picazzos's Pizza_

#### _A website for Picazzo's Pizza_

#### By _**Morgan Bradford**_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap 5_
* _JavaScript_
* _jQuery-3.5.1_

## Description

_A website for Picazzo's Pizza_

## Setup/Installation Requirements

1. Clone this repository from GitHub
2. Navigate to the top directory
2. Use your favorite browser to open index.html
3. Click "Pick-up"
4. Select the size size of pizza you would like
5. Select the toppings you would like on your pizza
6. Click "Submit order," review your order.

Details: using terminal, navigate to the directory you would like to download this directory to. For this example we will be navigating to desktop. For any commands, type what is in between the 'single' quotation marks. To navigate to desktop, type 'cd ~/desktop'. To confirm your location enter 'pwd'. You should receive a message similar to "/c/Users/vampi/desktop" in this instance my location translates to "/hard drive c/Users folder/user/desktop". The last entry "desktop" is my current directory, and just happens to be inside of the other directories previously listed.

Note: If you have a directory named pizza-parlor located here before using this next command, you may run into issues. To see a list of directories in your current location enter 'ls' in the terminal.

Next, enter the following command 'git clone https://github.com/MorganJBradford/pizza-parlord.git'

The terminal should return with something similar to:

Cloning into 'pizza-parlor'...

remote: Enumerating objects: 94, done.

remote: Counting objects: 100% (94/94), done.

remote: Compressing objects: 100% (62/62), done.

remote: Total 94 (delta 41), reused 82 (delta 29), pack-reused 0

Receiving objects: 100% (94/94), 119.48 KiB | 1.05 MiB/s, done.

Resolving deltas: 100% (41/41), done.

Next enter the command "ls" which should return with a list of files and directories. Mine returned with:

desktop.ini icebreaker/ portfolio/ pizza-parlor/

Because I did not have a directory named pizza-parlor, I know it downloaded successfully. Now you should have an icon for the directory named pizza-parlor on your desktop background. Double click on the icon, this should open the directory. Right click on "index.html" select open, or select open with if you have multiple web browsers and would like to use a specific one.

 Click pick-up. Select the size size of pizza you would like. Select the toppings you would like on your pizza. Click "Submit order," review your order.

## Specifications

Describe: Pizza;
test-1: "it will create an instance of the object Pizza"
Expect(new Pizza).toEqual(Pizza {toppings: {...}, size: {...}})

test-2: "it will add a Topping object in Pizza.toppings"
Expect(customerPizza.addTopping(newTopping).toEqual(toppings:
pepperoncini: Topping {topping: "pepperoncini"}))

Test-3: "it will increment Pizza.currentId by 1 when addTopping is called, then add the returned id to the topping added"
Expect(customerPizza.addTopping(newTopping).toEqual(toppings:
1: Topping {topping: "pepperoncini", id: 1}))

Test-4: "it will adjust the value for Pizza.cost according to the size of pizza selected"
Expect(customerPizza(this.size: "personal";)).toEqual(Pizza {toppings: {…}, size: "personal", price: 7.99, currentId: 0})

Test-4 "it will adjust the value of Pizza.cost according to the amount of toppings added to the pizza"
Expect(customerPizza(this.size: "personal"; this.currentId: 5;).toEqual(Pizza {toppings: {…}, size: "personal", price: 8.99, currentId: 5}))

Test-5: "it will locate a Pizza.topping via the id associated with the topping"
Expect(customerPizza.findTopping(2)).toEqual(Topping {topping: "mushrooms", id: 2})

Describe Topping;
test-1: "it will create an instance of the object Topping"
Expect(new Topping("pepperoncini")toEqual(Topping {topping: "pepperoncini"}))

## Known Bugs

* _No error message if size is not selected_
* _Menu img does not extend down the page when you click "Submit order"_

## License

_[MIT](LICENSE.txt)_

## Contact Information

_{Morgan Bradford_: morganjbradford95@gmail.com