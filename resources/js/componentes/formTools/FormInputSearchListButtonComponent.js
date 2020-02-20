Vue.component('input-search-list-btn-form-component', {
    template: `
        <div class="controls-form-component">
            <div class="controls-form-component-inside ">
                <div class="img-icon" style="background-color:#00827c;color: #fff;">
                    <i class="search icon" style="width: 29px; font-size: 24px;"></i>
                </div>
                <div class="body">
                    <p style="margin-left:7px;">Cuadro de busqueda con boton</p>
                </div>
            </div>
            <div class="display-form-element ui fluid action input">
                <input type="text" placeholder="Search...">
                <select class="ui compact selection dropdown">
                    <option value="all">All</option>
                    <option selected="" value="articles">Articles</option>
                    <option value="products">Products</option>
                </select>
                <div class="ui button">Search</div>
            </div>
        </div>
    `,
})