<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskPostRequest;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facade\Hash;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks=Task::all();

        return response()->json([
            'status'=> true,
            'tasks'=>$tasks
        ]); 
       
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TaskPostRequest $request)
    {

        
        $task = Task::create($request->all());

        return response()->json([
            'status'=>true,
            'task'=>$task
        ],201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $task=Task::findOrFail($id);

        return response()->json([
            'status'=> true,
            'task'=>$task
        ]); 
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(TaskPostRequest $request, Task $task)
    {
     $task->update($request->all());

        return response()->json([
            'status' => true,
            'message' => "task Updated successfully!",
            'task' => $task
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(Task $task)
    { $task->delete();

        return response()->json([
            'status' => true,
            'message' => "Task Deleted successfully!",
        ], 200);
    }
}
