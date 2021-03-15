<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EventController extends ResponseController
{
    public function index(){
        $events = Event::with('user')->latest()->get();
        if (count($events))
        {
            return response()->json($events, 200);
        }
        return $this->sendError('No dataset found!', ['error' => 'No dataset found!']);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'desc' => 'required',
            'excerpt' => 'required',
            'start_date' => 'required',
            'size' => 'required',
        ]);
        if ($validator->fails()){
            return $this->sendError($validator->messages(), ['error' => $validator->messages()]);
        }

        $event = Event::create($request->all());
        return $this->sendResponse($event, 'Event Created');
    }

    public function create(){

    }

    public function show($id){
        $event = Event::find($id);
        if (!$event){
            return $this->sendError('Event not found');
        }
        return response()->json($event);
    }

    public function update(Request $request, $id){
        $event = Event::find($id);
        if (!$event){
            return $this->sendError('Event not found');
        }
        $event->update($request->all());
        return $this->sendResponse($event,'Event Updated');
    }
    public function destroy($id){
        $event = Event::find($id);
        if (!$event){
            return $this->sendError('Event not found');
        }
        $event->delete();
        $events = Event::get();
        return $this->sendResponse($events,'Event deleted');
    }
    public function userEvents($id){
        $user = User::find($id);
        return response()->json($user->events);
    }
}
