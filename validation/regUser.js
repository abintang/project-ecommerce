module.exports={
	registrasi: {
		nama_user: {required: true,message: 'Nama field required'},
		email: {required: true,pattern: /\S+@\S+\.\S+/,message: 'Input valid Email required, ex: @gmail, @yahoo'},
		jenis_kelamin: {required: true,message: 'Jenis Kelamin field required'},
		alamat: {required: true,message: 'Alamat field required'},
		no_tlp: {required: true,message: 'Input Valid Nomor Telepon and field is required'},
		password: {required: true,min: 6,message: 'Password field Required & password harus lebih dari 6 huruf.'}
	}
}