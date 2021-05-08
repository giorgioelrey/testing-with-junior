@extends('frontend.layout.empty-app')

@section('head-css')

    <style>
        #test-page-catch-all {
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>

@endsection


@section('content')

    <section id="test-page-catch-all">
        <h1>This is a test</h1>
    </section>

@endsection
