Vue.component('form-checkout-component',{
    template:`
    <div class="controls-form-component">
            <div class="controls-form-component-inside ">
                <div class="img-icon" style="background-color:#2196F3;color: #fff;">
                    <i class="cart icon" style="width: 29px; font-size: 24px;"></i>
                </div>
                <div class="body">
                    <p style="margin-left:7px;">Chekout input</p>
                </div>
            </div>
            <div class="display-form-element ui fluid left action input">
                <button class="ui teal labeled icon button">
                    <i class="cart icon"></i>
                    Checkout
                </button>
                <input type="text" value="$52.03">
            </div>
        </div>
    `
});