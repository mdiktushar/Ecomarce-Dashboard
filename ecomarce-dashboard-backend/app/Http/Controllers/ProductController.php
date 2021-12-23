<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;

class ProductController extends Controller
{
    //

    public function addProduct(Request $req)
    {
        # code...
        $req->file('img')->store('products');
        $product = new product;
        $product->name = $req->name;
        $product->price = $req->price;
        $product->description = $req->description;
        $product->file_path = $req->file('img')->store('products');
        $product->save();
        return $product;
    }

    public function list(Type $var = null)
    {
        # code...
        return product::all();
    }
}
