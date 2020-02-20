Vue.component('document-adjunt-form-component', {
    template: `
        <div class="controls-form-component">
            <div class="controls-form-component-inside ">
                <div class="img-icon" style="background-color:rgb(91, 106, 117);color: #fff;">
                    <i class="pdf file outline icon" style="width: 29px; font-size: 24px;"></i>
                </div>
                <div class="body">
                    <p style="margin-left:7px;">Adjuntar documento</p>
                </div>
            </div>
            <div class="display-form-element ui placeholder segment">
                <div class="ui icon header">
                    <i class="pdf file outline icon"></i>
                        No documents are listed for this customer.
                    </div>
                <div class="ui primary button">Add Document</div>
            </div>
        </div>
    `,
})