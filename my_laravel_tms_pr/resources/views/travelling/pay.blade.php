@extends('layouts.app')

@section('content')
<div class="about-main-content" style="margin-top:-25px">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="content">
            <div class="blur-bg"></div>
            <h4>Pay with Paypal</h4>
            <div class="line-dec"></div>
            <div class="main-button">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


    <div class="container">  
                    <!-- Replace "test" with your own sandbox Business account app client ID -->
                    <script src="https://www.paypal.com/sdk/js?client-id=AVKluIYle0Q2FtS-sHz7qse4ko2sJMqXfGSiME7q62fhSdoCliOlsVpT3qCsjDdzdd2aK2asyQ0Hl6ok&currency=USD"></script>
                    <!-- Set up a container element for the button -->
                    <div id="paypal-button-container"></div>
                    <script>
                        paypal.Buttons({
                        // Sets up the transaction when a payment button is clicked
                        createOrder: (data, actions) => {
                            return actions.order.create({
                            purchase_units: [{
                                amount: {
                                value: '{{Session::get('price')}}' // Can also reference a variable or function
                                }
                            }]
                            });
                        },
                        // Finalize the transaction after payer approval
                        onApprove: (data, actions) => {
                            return actions.order.capture().then(function(orderData) {
                          
                             window.location.href='http://127.0.0.1:8000/travelling/success';
                            });
                        }
                        }).render('#paypal-button-container');
                    </script>
                  
                </div>
      
@endsection
    
