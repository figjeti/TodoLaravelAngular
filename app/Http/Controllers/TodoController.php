<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;
class TodoController extends Controller
{
    public function index(){
    return Todo::paginate();
}

public function show($id){
    $todo = Todo::findOrFail($id);
         
    return $todo;
}

public function store(Request $request){
    $this->validate($request, [  'name' => 'required' ]);
    $this->validate($request, [  'name' => 'required' ]);
    $todo = Todo::create([
        'name' => $request->input('name'),
        'description' => $request->input('description')
    ]);
         
    return $todo;
}
public function destroy($id){
         
    return Todo::destroy($id);
}

}
