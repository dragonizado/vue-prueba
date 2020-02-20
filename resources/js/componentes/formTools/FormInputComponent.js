Vue.component('input-form-component',{
    template:`
        <div class="controls-form-component">
            <div class="controls-form-component-inside ">
                <div class="img-icon " style="background-color: #9C27B0;color: #f1eded;">
                    <i class="text width icon" style="width: 29px; font-size: 24px;"></i>
                </div>
                <div class="body">
                    <p style="margin-left:7px;">Entrada de texto</p>
                </div>
            </div>
            <div class="display-form-element ui fluid input">
                <input type="text" placeholder="Texto...">
            </div>
        </div>
    `,
})