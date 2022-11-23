<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{

    public function index()
    {
        $todos = Todo::all();
        return $todos;
    }

    public function store(Request $request)
    {
        $todo = new Todo();
        $todo->content = $request->content;
        $todo->completed = $request->completed;
        $todo->deadline = $request->deadline;

        $todo->save();
    }

    public function show($id)
    {
        $todo = Todo::find($id);
        return $todo;
    }

    public function update(Request $request, $id)
    {
        $todo = Todo::findOrFail($id);
        $todo->content = $request->content;
        $todo->completed = $request->completed;
        $todo->deadline = $request->deadline;

        $todo->save();
    }

    public function destroy($id)
    {
        $todo = Todo::destroy($id);
        return $todo;
    }
}
