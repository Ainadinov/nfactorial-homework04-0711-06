// Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает `true`, если параметр `age` больше `18`.
// В ином случае она задаёт вопрос `confirm` и возвращает его результат.

        // function checkAge(age) {
        //   if (age > 18) {
        //     return true;
        //   } else {
        //     return confirm('Родители разрешили?');
        //   }
        // }
        function checkAge(age) {
            return (age > 18) ? true: confirm('Родители разрешили?');
        }
        
        checkAge(16);

        // Функция pow(x,n)
        // Напишите функцию `pow(x,n)`, которая возвращает `x` в степени `n`. Иначе говоря, умножает `x` на себя `n` раз и возвращает результат.
        // pow(3, 2) = 3*3 = 9
        // pow(3, 3) = 3*3*3 = 27
        // pow(1, 100) = 1*1 * ...* 1 = 1

        function pow(x, n){
            let sum = x;
            for(i = 1; i < n; i++){
                sum *= x;
             }
            return sum;
        }
        let x = +prompt("x");
        let n = +prompt("n" );
        alert( pow(x, n) );

        // Перепишите с использованием функции-стрелки
        // Замените код Function Expression стрелочной функцией:
        // function ask(question, yes, no) {
        //     if (confirm(question)) yes()
        //     else no();
        //   }
          
        //   ask(
        //     "Вы согласны?",
        //     function() { alert("Вы согласились."); },
        //     function() { alert("Вы отменили выполнение."); }
        //   );

            const  ask = (question, yes, no) => (confirm(question)) ? yes(): no();
            
            ask(
                "Вы согласны?",
                function() { alert("Вы согласились."); },
                function() { alert("Вы отменили выполнение."); }
            );

        // Сортировать в порядке по убыванию
        // let arr = [5, 2, 1, -10, 8];
        let arr = [5, 2, 1, -10, 8];
        alert( arr.sort((a, b) => (b - a)) ); // 8, 5, 2, 1, -10    


        // Трансформировать в массив имён
        // У вас есть массив объектов `user`, и в каждом из них есть `user.name`. Напишите код, который преобразует их в массив имён.
        let vasya = { name: "Вася", age: 25 };
        let petya = { name: "Петя", age: 30 };
        let masha = { name: "Маша", age: 28 };
        let users = [ vasya, petya, masha ];

        let names = users.map(function (item, index, array) {
            return item.name;
        });

        alert( names ); // Вася, Петя, Маша

        // Трансформировать в объекты

        // У вас есть массив объектов `user`, и у каждого из объектов есть `name`, `surname` и `id`.

        // Напишите код, который создаст ещё один массив объектов с параметрами `id` и `fullName`, где `fullName` – состоит из `name` и `surname`.

        // Например:

        
        let vasya2 = { name: "Вася", surname: "Пупкин", id: 1 };
        let petya2 = { name: "Петя", surname: "Иванов", id: 2 };
        let masha2 = { name: "Маша", surname: "Петрова", id: 3 };

        let users2 = [ vasya2, petya2, masha2 ];

        let usersMapped = users2.map(users2 => ({
            fullName: `${users2.name} ${users2.surname}`,
            id: users2.id
          }));
        // usersMapped = [
        // { fullName: "Вася Пупкин", id: 1 },
        // { fullName: "Петя Иванов", id: 2 },
        // { fullName: "Маша Петрова", id: 3 }
        // ]
        

        alert( usersMapped[0].id ) // 1
        alert( usersMapped[0].fullName ) // Вася Пупкин
    

        //Напишите функцию `getAverageAge(users)`, которая принимает массив объектов со свойством `age`и возвращает средний возраст.
        // Формула вычисления среднего арифметического значения: `(age1 + age2 + ... + ageN) / N`.
        
        let vasya3 = { name: "Вася", age: 25 };
        let petya3 = { name: "Петя", age: 30 };
        let masha3 = { name: "Маша", age: 29 };

        let arr3 = [ vasya3, petya3, masha3 ];

          function getAverageAge(user){
            return user.reduce(function( previousValue, item, index, array,){
                    return (item.age + previousValue) 
            }, 0) / user.length;
          }

        alert( getAverageAge(arr3) ); // (25 + 30 + 29) / 3 = 28
        