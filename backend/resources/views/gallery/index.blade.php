<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gallery</title>
    <link rel="stylesheet" href="{{ asset('template/plugins/fontawesome-free/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('template/dist/css/adminlte.min.css?v=3.2.0') }}">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
</head>

<body class="hold-transition sidebar-mini">
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
                    <button class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#createModal">Tambah Gallery</button>

                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Gambar</th>
                                <th>Nama Event</th>
                                <th>Tanggal</th>
                                <th>Pemilik</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($galleries as $gallery)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>
                                    <img
                                        src="{{ asset('storage/' . $gallery->path_image) }}"
                                        width="100"
                                        alt="{{ $gallery->name_event }}"
                                        class="img-thumbnail previewable"
                                        data-src="{{ asset('storage/' . $gallery->path_image) }}"
                                        style="cursor: pointer;">
                                </td>
                                <td>{{ $gallery->name_event }}</td>
                                <td>{{ $gallery->date }}</td>
                                <td>{{ $gallery->user->name ?? 'Tidak Diketahui' }}</td>
                                <td>
                                    <button class="btn btn-warning btn-edit"
                                        data-id="{{ $gallery->id_gallery }}"
                                        data-name="{{ $gallery->name_event }}"
                                        data-date="{{ $gallery->date }}">
                                        Edit
                                    </button>
                                    <button class="btn btn-danger btn-delete"
                                        data-id="{{ $gallery->id_gallery }}">
                                        Hapus
                                    </button>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {{-- Modal Tambah --}}
        <div class="modal fade" id="createModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <form action="{{ route('gallery.store') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Tambah Gallery</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label>Nama Event</label>
                                <input type="text" name="name_event" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Tanggal</label>
                                <input type="date" name="date" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Gambar</label>
                                <input type="file" name="image" class="form-control" required>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-success">Tambah</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        {{-- Modal Edit --}}
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
                                <label>Nama Event</label>
                                <input type="text" name="name_event" id="editName" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Tanggal</label>
                                <input type="date" name="date" id="editDate" class="form-control" required>
                            </div>
                            <div class="mb-3">
                                <label>Gambar (Opsional)</label>
                                <input type="file" name="image" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label>Gambar Saat Ini</label><br>
                                <img id="currentImage" src="" class="img-fluid rounded mb-2" style="max-height: 200px;">
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-success">Simpan Perubahan</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        {{-- Modal Hapus --}}
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <form method="POST" id="deleteForm">
                    @csrf
                    @method('DELETE')
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Konfirmasi Hapus</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <p>Apakah Anda yakin ingin menghapus gallery ini?</p>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-danger">Hapus</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Batal</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="modal fade" id="imagePreviewModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content bg-dark">
                    <div class="modal-header border-0">
                        <button type="button" class="btn-close btn-close-white ms-auto" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img id="previewImage" src="" alt="Preview" class="img-fluid rounded">
                    </div>
                </div>
            </div>
        </div>

    </div>


    <script src="{{ asset('template/plugins/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('template/dist/js/adminlte.min.js?v=3.2.0') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        $('.btn-edit').click(function() {
            const id = $(this).data('id');
            const name = $(this).data('name');
            const date = $(this).data('date');
            const url = "{{ route('gallery.update', ':id') }}".replace(':id', id);

            $('#editForm').attr('action', url);
            $('#editName').val(name);
            $('#editDate').val(date);
            new bootstrap.Modal(document.getElementById('editModal')).show();
        });

        $('.btn-delete').click(function() {
            const id = $(this).data('id');
            const action = '{{ route("gallery.destroy", ":id") }}'.replace(':id', id);
            $('#deleteForm').attr('action', action);
            new bootstrap.Modal(document.getElementById('deleteModal')).show();
        });
        $('.previewable').click(function() {
            const src = $(this).data('src');
            $('#previewImage').attr('src', src);
            new bootstrap.Modal(document.getElementById('imagePreviewModal')).show();
        });
        $('.btn-edit').click(function() {
            const id = $(this).data('id');
            const name = $(this).data('name');
            const date = $(this).data('date');
            const url = "{{ route('gallery.update', ':id') }}".replace(':id', id);

            const imageSrc = $(this).closest('tr').find('.previewable').attr('src');

            $('#editForm').attr('action', url);
            $('#editName').val(name);
            $('#editDate').val(date);
            $('#currentImage').attr('src', imageSrc);
            new bootstrap.Modal(document.getElementById('editModal')).show();
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