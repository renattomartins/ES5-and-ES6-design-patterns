var Singleton = (function () {

    var _singleton;

    function init(data) {

        var data = data;
        console.log("Singleton class created");

        return {

            SingletonOperation: function () {
                console.log('SingletonOperation');
            },

            GetSingletonData: function() {
                return data;
            }
        };
    };

    return {

        // Cria uma nova instância se não existir
        // ou retorna a instância já existente
        instance: function (data) {
            if ( !_singleton ) {
                _singleton = init(data);
            }
            return _singleton;
        }
    };
})();

// Para testar:
function init_Singleton() {
    var singleton1 = Singleton.instance("data1");
    var singleton2 = Singleton.instance("data2");
    console.log( singleton1.GetSingletonData() ); // data1
    console.log( singleton2.GetSingletonData() ); // data1
    console.log( singleton1.GetSingletonData() ===
                 singleton2.GetSingletonData() ); // true
}
init_Singleton();

