
<?php require_once("templates-parts/header.php"); ?>

<div id="page">
<!-- PAGE CONTENT -->
<div class="container content">
<div class="row">
    <div class="col-sm-12">
        <div class="text-center" id="custom-logo">
            <img class="img-fluid" src="/frontend/img/logo_1.png" width="250px" />
        </div>
             
        <form>
            <div class="input-group mb-3 input-group-lg search-product">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1"><i class="fa fa-search" aria-hidden="true"></i></span>
                </div>

                <input type="text" class="form-control" id="product" placeholder="Wpisz nazwę szukanego produktu" aria-label="product" aria-describedby="basic-addon1">

                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Szukaj</button>
                </div>
            </div>
        </form>

        <div class="card">
            <div class="card-header">Moje produkty</div>
            <div class="card-body">
                <table id="products-table" class="table table-striped table-hover">
                    <thead>
                        <th>Lp.</th>
                        <th>Nazwa produktu</th>
                        <th>Aktualna cena</th>
                        <th></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>Lorem ipsum</td>
                            <td>20.99 zł</td>
                            <td><a href="#">Zobacz szczegóły</a></td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Cras egestas</td>
                            <td>34.50 zł</td>
                            <td><a href="#">Zobacz szczegóły</a></td>
                        </tr>
                        <tr>
                            <td>3.</td>
                            <td>Sed tempor</td>
                            <td>26.00 zł</td>
                            <td><a href="#">Zobacz szczegóły</a></td>
                        </tr>
                        <tr>
                            <td>4.</td>
                            <td>Nullam vulputate</td>
                            <td>8.99 zł</td>
                            <td><a href="#">Zobacz szczegóły</a></td>
                        </tr>
                        <tr>
                            <td>5.</td>
                            <td>Pellentesque ac</td>
                            <td>14.50 zł</td>
                            <td><a href="#">Zobacz szczegóły</a></td>
                        </tr>
                        <tr>
                            <td>6.</td>
                            <td>Nulla vel</td>
                            <td>6.00 zł</td>
                            <td><a href="#">Zobacz szczegóły</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    </div>


<?php require_once("templates-parts/footer.php"); ?>