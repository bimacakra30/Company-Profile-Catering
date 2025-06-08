<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery</title>
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
                            <h1 class="m-0">Gallery</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <button class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#createModal">
                        <i class="fa fa-plus"></i>
                    </button>

                    <table class="table table-bordered">
                        <thead>
                            <tr class="text-center">
                                <th>No</th>
                                <th>Image</th>
                                <th>Event Name</th>
                                <th>Date</th>
                                <th>Added By</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($galleries as $gallery)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>
                                        @foreach($gallery->images as $image)
                                            <img src="{{ asset('storage/' . $image->path_image) }}" width="100"
                                                alt="{{ $gallery->name_event }}" class="img-thumbnail previewable"
                                                data-src="{{ asset('storage/' . $image->path_image) }}"
                                                style="cursor: pointer; margin: 2px;">
                                        @endforeach
                                    </td>
                                    <td>{{ $gallery->name_event }}</td>
                                    <td>{{ $gallery->date }}</td>
                                    <td>{{ $gallery->user->name ?? 'Tidak Diketahui' }}</td>
                                    <td>
                                        <button class="btn btn-warning btn-edit" data-id="{{ $gallery->id_gallery }}"
                                            data-name="{{ $gallery->name_event }}" data-date="{{ $gallery->date }}"
                                            data-images='@json($gallery->images->pluck("path_image", "id_image"))'>
                                            <i class="fa fa-pencil-alt"></i>
                                        </button>

                                        <button class="btn btn-danger btn-delete" data-id="{{ $gallery->id_gallery }}">
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

        <div class="modal fade" id="createModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <form action="{{ route('gallery.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add Gallery</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label>Event Name</label>
                                <input type="text" name="name_event" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Date</label>
                                <input type="date" name="date" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Gambar:</label>
                                <input type="file" name="path_image[]" multiple required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-success">Save</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="modal fade" id="editModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <form method="POST" id="editForm" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Edit Gallery</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label>Event Name</label>
                                <input type="text" name="name_event" id="editName" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Date</label>
                                <input type="date" name="date" id="editDate" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <div class="mb-3">
                                    <label>Add New Images (Optional)</label>
                                    <input type="file" name="path_image[]" class="form-control" multiple>
                                </div>
                                <div class="mb-3">
                                    <label>Current Images (Check if want to Delete)</label><br>
                                    <div id="currentImagesContainer" style="display: flex; flex-wrap: wrap; gap: 10px;">
                                        <!-- akan diisi lewat JS -->
                                    </div>
                                </div>


                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-success">Save Change</button>
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
                            <p>Are you sure you want to delete this gallery?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-danger">Delete</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="modal fade" id="imagePreviewModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-dark">
                    <div class="modal-header border-0">
                        <button type="button" class="btn-close btn-close-white ms-auto"
                            data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img id="previewImage" src="" alt="Preview" class="img-fluid rounded">
                    </div>
                </div>
            </div>
        </div>

        <form method="POST" id="deleteForm" style="display: none;">
            @csrf
            @method('DELETE')
        </form>

    </div>


    <script src="{{ asset('template/plugins/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('template/dist/js/adminlte.min.js?v=3.2.0') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        $('.btn-edit').click(function () {
            const id = $(this).data('id');
            const name = $(this).data('name');
            const date = $(this).data('date');
            const url = "{{ route('gallery.update', ':id') }}".replace(':id', id);

            const images = $(this).data('images'); // Object: {id_image: path_image}

            $('#editForm').attr('action', url);
            $('#editName').val(name);
            $('#editDate').val(date);

            // Tampilkan semua gambar lama dengan checkbox untuk hapus
            $('#currentImagesContainer').html('');
            $.each(images, function (id_image, path_image) {
                $('#currentImagesContainer').append(`
                <div style="position: relative; display: inline-block;">
                    <img src="/storage/${path_image}" style="max-width: 120px; border-radius: 5px;">
                    <input type="checkbox" name="delete_images[]" value="${id_image}" style="position: absolute; top: 5px; left: 5px; width: 20px; height: 20px;">
                </div>
            `);
            });

            // Tampilkan modal edit
            new bootstrap.Modal(document.getElementById('editModal')).show();
        });

        $('.btn-delete').click(function () {
            const id = $(this).data('id');
            const action = '{{ route("gallery.destroy", ":id") }}'.replace(':id', id);

            Swal.fire({
                title: 'Are you sure?',
                text: "This gallery will be deleted!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'Cancel'
            }).then((result) => {
                if (result.isConfirmed) {
                    $('#deleteForm').attr('action', action).submit();
                }
            });
        });

        $('.previewable').click(function () {
            const src = $(this).data('src');
            $('#previewImage').attr('src', src);
            new bootstrap.Modal(document.getElementById('imagePreviewModal')).show();
        });
    </script>



    @if(session('success'))
        <script>
            Swal.fire({
                position: "center",
                icon: "success",
                title: "{{ session('success') }}",
                showConfirmButton: false,
                timer: 2000
            });
        </script>
    @endif
</body>

</html>