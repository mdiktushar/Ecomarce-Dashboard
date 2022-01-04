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

    public function delete($id)
    {
        # code...
        $result = Product::where('id', $id)->delete();
        if ($result) {
            return ["result" => "Product has been deleted"];
        } else {
            return ["result" => "No product found to delete"];
        }
        
    }

    public function getProcuct($id)
    {
        # code...
        $result = Product::find($id);
        if($result) {
            return Product::find($id);
        }
        return ["result" => "No product found"];
    }

    public function updateProduct($id, Request $req)
    {
        # code...
        
        $product = Product::find($id);
        $product->name = $req->name;
        $product->price = $req->price;
        $product->description = $req->description;
        if($req->file('img')){
            $product->file_path = $req->file('img')->store('products');
        }
        
        $product->save();
        return $product;
    }


    public function search($key)
    {
        # code...
        return Product::where('name','LIKE',"%$key%")->get();
    }
}
