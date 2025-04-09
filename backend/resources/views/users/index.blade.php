<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Management User</title>
    <link rel="stylesheet" href="{{ asset('template/plugins/fontawesome-free/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('template/dist/css/adminlte.min.css?v=3.2.0') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.4.10/sweetalert2.min.css">
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
                            <h1 class="m-0">User Management</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <a href="#" class="btn btn-primary mb-3" data-toggle="modal" data-target="#addUserModal">Add User</a>
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Level</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($users as $user)
                            <tr>
                                <td>{{ $loop->iteration }}</td>
                                <td>{{ $user->name }}</td>
                                <td>{{ $user->username }}</td>
                                <td>{{ $user->level }}</td>
                                <td>{{ $user->status }}</td>
                                <td>
                                    <button class="btn btn-warning btn-edit"
                                        data-id="{{ $user->id_user }}"
                                        data-name="{{ $user->name }}"
                                        data-username="{{ $user->username }}"
                                        data-level="{{ $user->level }}"
                                        data-status="{{ $user->status }}">
                                        Edit
                                    </button>
                                    @if ($user->status == 'Active')
                                    <form action="{{ route('users.deactivate', $user->id_user) }}" method="POST" style="display:inline;">
                                        @csrf
                                        @method('PUT')
                                        <button type="submit" class="btn btn-danger">Deactivate</button>
                                    </form>
                                    @endif

                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="editUserModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="editUserModalLabel">Edit Pengguna</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <form id="editUserForm" method="POST">
                        @csrf
                        @method('PUT')
                        <div class="modal-body">
                            <input type="hidden" id="edit_user_id" name="id_user">
                            <div class="form-group">
                                <label for="edit_name">Nama</label>
                                <input type="text" class="form-control" id="edit_name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="edit_username">Username</label>
                                <input type="text" class="form-control" id="edit_username" name="username" required>
                            </div>
                            <div class="form-group">
                                <label for="edit_password">Password (Kosongkan jika tidak ingin mengubah)</label>
                                <input type="password" class="form-control" id="edit_password" name="password">
                            </div>
                            <div class="form-group">
                                <label for="edit_level">Level</label>
                                <select class="form-control" id="edit_level" name="level" required>
                                    <option value="Owner">Owner</option>
                                    <option value="Staff">Staff</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="edit_status">Status</label>
                                <select class="form-control" id="edit_status" name="status" required>
                                    <option value="Active">Active</option>
                                    <option value="Deactive">Deactive</option>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-info">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>

    <script src="{{ asset('template/plugins/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('template/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('template/dist/js/adminlte.min.js?v=3.2.0') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    <script>
        $(document).ready(function() {
            $(".btn-edit").click(function() {
                let userId = $(this).data("id");
                let name = $(this).data("name");
                let username = $(this).data("username");
                let level = $(this).data("level");
                let status = $(this).data("status");

                $("#edit_user_id").val(userId);
                $("#edit_name").val(name);
                $("#edit_username").val(username);
                $("#edit_level").val(level);
                $("#edit_status").val(status);

                let updateUrl = "{{ route('users.update', ':id') }}".replace(':id', userId);
                $("#editUserForm").attr("action", updateUrl);

                $("#editUserModal").modal("show");
            });

            $("#editUserForm").submit(function(e) {
                e.preventDefault();
                Swal.fire({
                    title: "Apakah Anda yakin?",
                    text: "Data akan diperbarui!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Ya, perbarui!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.submit();
                    }
                });
            });
        });
    </script>

    <div class="modal fade" id="addUserModal" tabindex="-1" aria-labelledby="addUserModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addUserModalLabel">Tambah Pengguna</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form id="addUserForm" action="{{ route('users.store') }}" method="POST">
                    @csrf
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="add_name">Nama</label>
                            <input type="text" class="form-control" id="add_name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="add_username">Username</label>
                            <input type="text" class="form-control" id="add_username" name="username" required>
                        </div>
                        <div class="form-group">
                            <label for="add_password">Password</label>
                            <input type="password" class="form-control" id="add_password" name="password" required>
                        </div>
                        <div class="form-group">
                            <label for="add_level">Level</label>
                            <select class="form-control" id="add_level" name="level" required>
                                <option value="Owner">Owner</option>
                                <option value="Staff">Staff</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="add_status">Status</label>
                            <select class="form-control" id="add_status" name="status" required>
                                <option value="Active">Active</option>
                                <option value="Deactive">Deactive</option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="submit" class="btn btn-success">Add</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script>
        $(document).ready(function() {
            $("#addUserForm").submit(function(e) {
                e.preventDefault();
                Swal.fire({
                    title: "Apakah Anda yakin?",
                    text: "Pengguna baru akan ditambahkan!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Ya, tambahkan!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.submit();
                    }
                });
            });
        });
    </script>

</body>

</html>