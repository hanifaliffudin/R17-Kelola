<?php
if(isset($_POST['submit'])){
	if(!empty($_POST['opt-contact'])) {
		if($_POST['opt-contact']=="sales"){
			$admin = 'sales@r17.co.id'; //ganti email dg email admin (email penerima pesan)
		}else{
			$admin = 'helpdesk@r17.co.id'; //ganti email dg email admin (email penerima pesan)
		}
	}
	
	$name	= htmlentities($_POST['name']);
	$email	= htmlentities($_POST['email']);
	$phone	= htmlentities($_POST['phone']);
	$subject	= 'Contact Us Website';
	$message	= "Nama: ". $name ."\nNomor Telp: ".$phone. "\nEmail: ".$email. "\nPesan: ".htmlentities($_POST['message']);" " ;

	$pengirim .= 'From: <'.$email.'>' . "\r\n";
	
	if(mail($admin, $subject, $message, $pengirim)){
		header("Location: /");
	}else{
		echo 'ERROR: Pesan anda gagal di kirim silahkan coba lagi. <a href="/">Kembali</a>';
	}
}else{
	echo "Error";
	// header("Location: index.php");
}
?>