<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Review</title>
    <link rel="stylesheet" href="{{ asset('template/plugins/fontawesome-free/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('template/dist/css/adminlte.min.css?v=3.2.0') }}">
</head>

<body class="hold-transition sidebar-mini sidebar-collapse">
    <div class="wrapper">
        @include('layouts.navbar')
        @include('layouts.sidebar')

        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Customer Reviews</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <table class="table table-bordered">
                        <thead class="text-center">
                            <tr>
                                <th>No</th>
                                <th>Customer Name</th>
                                <th>Review</th>
                                <th>Date</th>
                                <th>Response</th>
                                <th>Response By</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($reviews as $review)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>{{ $review->customer_name }}</td>
                                    <td>{{ $review->review_text }}</td>
                                    <td>{{ $review->created_at }}</td>
                                    <td>{{ $review->respon_text ?? '-' }}</td>
                                    <td>{{ $review->user->name ?? '-' }}</td>
                                    <td>
                                        @if(is_null($review->respon_text))
                                            <button class="btn btn-success btn-response" data-id="{{ $review->id_review }}"
                                                data-respon="{{ $review->respon_text ?? '' }}">
                                                <i class="fa fa-reply"></i>
                                            </button>
                                        @endif
                                        <button class="btn btn-danger btn-delete" data-id="{{ $review->id_review }}">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal fade" id="responseModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <form method="POST" id="responseForm">
                    @csrf
                    @method('PUT')
                    <input type="hidden" name="id_user" value="{{ Auth::id() }}">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Respond to Review</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label>Response</label>
                                <textarea name="respon_text" id="responseText" class="form-control" rows="3"
                                    required></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-success">Save Response</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <form method="POST" id="deleteForm">
                    @csrf
                    @method('DELETE')
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Confirm Delete</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p>Are you sure you want to delete this review?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-danger">Delete</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>

    <script src="{{ asset('template/plugins/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('template/dist/js/adminlte.min.js?v=3.2.0') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        $('.btn-response').click(function () {
            const id = $(this).data('id');
            const url = "{{ route('review.update', ':id') }}".replace(':id', id);
            $('#responseForm').attr('action', url);
            $('#responseText').val($(this).data('respon') || '');
            new bootstrap.Modal(document.getElementById('responseModal')).show();
        });

        $('.btn-delete').click(function () {
            const id = $(this).data('id');
            const url = "{{ route('review.destroy', ':id') }}".replace(':id', id);
            $('#deleteForm').attr('action', url);
            new bootstrap.Modal(document.getElementById('deleteModal')).show();
        });
    </script>

    @if(session('success'))
        <script>
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: '{{ session('success') }}',
                showConfirmButton: false,
                timer: 2000
            });
        </script>
    @endif

</body>

</html>