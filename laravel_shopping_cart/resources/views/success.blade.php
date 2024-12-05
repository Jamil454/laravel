@extends('shop')

@section('content')
<h1> We have received your order</h1>
<h1>Your Order Summary</h1>
<table id="cart" class="table table-bordered" style="width: 40%;">
    <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>

        </tr>
    </thead>
    <tbody>
        @php $total = 0 @endphp
        @if(session('cart'))
        @foreach(session('cart') as $id => $details)

        <tr rowId="{{ $id }}">
            <td data-th="Product">
                <div class="row">
                    <div class="col-sm-3 hidden-xs"><img src="{{ $details['image'] }}" class="card-img-top" /></div>
                    <div class="col-sm-9">
                        <h4 class="nomargin">{{ $details['name'] }}</h4>
                    </div>
                </div>
            </td>

            <td data-th="Price">${{ $details['price'] }}</td>
            <td data-th="Quantity">{{ $details['quantity'] }}</td>
            <td data-th="Subtotal" class="text-center">${{ $details['quantity'] * $details['price']}}</td>
        </tr>

        @php $total += $details['quantity'] * $details['price'];

        $total = round($total);
        
        @endphp
        @endforeach
        @endif
    </tbody>
    <tfoot>
        <tr>
            <th>Total Amount: </th>
            <td colspan="3" class="text-center">${{$total}}</td>
        </tr>
        <tr>
            <td colspan="5" class="text-right">
                
            </td>
        </tr>
    </tfoot>
</table>
@endsection