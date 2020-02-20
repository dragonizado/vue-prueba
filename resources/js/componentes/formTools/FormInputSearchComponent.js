Vue.component('form-input-search-component',{
    template:`
    <div class="controls-form-component">
            <div class="controls-form-component-inside ">
                <div class="img-icon" style="background-color:rgb(53, 130, 0);color: #fff;">
                    <i class="search icon" style="width: 29px; font-size: 24px;"></i>
                </div>
                <div class="body">
                    <p style="margin-left:7px;">Cuadro de busqueda</p>
                </div>
            </div>
            <div class="display-form-element ui fluid action input">
                <input type="text" placeholder="Search...">
                <button class="ui icon button">
                    <i class="search icon"></i>
                </button>
            </div>
        </div>
    `
});