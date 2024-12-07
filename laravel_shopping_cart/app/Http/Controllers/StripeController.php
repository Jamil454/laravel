<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StripeController extends Controller
{


    public function session(Request $request)
    {
        \Stripe\Stripe::setApiKey(config('stripe.sk'));

        $orderNum = time();

        $productDetails = $request->get('productDetails');
        $totalprice = $request->get('total');
        $two0 = "00";
        $total = "$totalprice$two0";

        //  order entry

        DB::table('orders')->insert([
            'order_number'=>$orderNum,
            'total_amount'=> $totalprice,
            'payment_method'=>'stripe'

        ]);

         //  order details entry
        foreach (session()->get('cart') as $key =>$val ){
            DB::table('order_details')->insert([
                'order_number'=>$orderNum,
                'book_id'=> $key,
                'quantity'=>$val ['quantity'],
                'price'=>$val ['price']
    
            ]);
           
        };

        $session = \Stripe\Checkout\Session::create([
            'line_items'  => [
                [
                    'price_data' => [
                        'currency'     => 'USD',
                        'product_data' => [
                            "name" => $productDetails,
                        ],
                        'unit_amount'  => $total,
                    ],
                    'quantity'   => 1,
                ],

            ],
            'mode'        => 'payment',
            'success_url' => route('success'),
            'cancel_url'  => route('shopping.checkout'),
        ]);
        session()->forget('cart');
        return redirect()->away($session->url);
    }

    public function success()
    {
        return "We have received your order.";
    }

    // public function productOrder()
    // {
    //     $cart = session()->get('cart');
    //     dd($cart);

    //    // DB::table('orders');
    // }
}
