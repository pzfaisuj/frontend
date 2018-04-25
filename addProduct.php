
<?php require_once("templates-parts/header.php"); ?>

<div id="page">
<div class="container content">
<div class="card ">
    <div class="card-header bg-transparent "><h3 class="text-center mb-2"><br>Dodaj produkt</h3></div>
        <div class="card-body">
                    
            <form id="addProduct-form" method="POST" role="form">
                <div class="message"></div>
                <div class="controls">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="form_name"><h4>Nazwa produktu</h4></label>
                                <input id="form_name" type="text" name="name" class="form-control" placeholder="Podaj nazwę produktu *" required="required" data-error="Nazwa produktu jest wymagana.">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="form_code"><h4>Kod produktu</h4></label>
                                <input id="form_code" type="text" name="code" class="form-control" placeholder="Podaj kod produktu *" required="required" data-error="Kod produktu jest wymagany.">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="form_bayPrice"><h4>Cena zakupu</h4></label>
                                <input id="form_bayPrice" type="number" name="bayPrice" class="form-control" placeholder="Cena zakupu *" required="required" data-error="Cena zakupu jest wymagana.">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="form_sellPrice"><h4>Cena sprzedaży</h4></label>
                                <input id="form_sellPrice" type="number" name="sellPrice" class="form-control" placeholder="Cena sprzedaży *" required="required" data-error="Cena sprzedaży jest wymagana.">
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="form_description"><h4>Opis produktu *</h4></label>
                                <textarea id="form_description" name="description" class="form-control" placeholder="Opis produktu *" rows="8" required="required" data-error="Prosze podać opis produktu."></textarea>
                                <div class="help-block with-errors"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group ">
                                <label for="fileupload"><h4>Zdjęcie produktu</h4></label>
                                <input type="file" class="form-control-file " id="fileupload" aria-describedby="fileupload" multiple>
                                <small id="fileupload" class="form-text text-muted">Dodaj jedno lub więcej zdjęć produktu.</small>
                            </div>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-12">
                            <input type="submit" class="btn btn-success btn-send " value="Dodaj produkt">
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-md-12">
                            <p class="text-muted"><strong>*</strong> Pola oznaczone tym znakiem są wymagane.</p>
                        </div>
                    </div>
                </div>
        </form>
    </div>     

<?php require_once("templates-parts/footer.php"); ?>