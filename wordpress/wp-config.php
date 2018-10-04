<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.osdn.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'BLOG');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'root');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'root');

/** MySQL のホスト名 */
define('DB_HOST', 'localhost');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8mb4');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'x9YF<oER32F4d}%d%,-l*`OFf+rB2fP8b@4v.X]LB{q<VhSh=!xel.J*%&CW.gX^');
define('SECURE_AUTH_KEY',  'ZSv$J 7evXGtyw+Zl+!F6c66@wsVxs:|)950WER$Bw?TF+aCh{2@cYLWl~TO*YH(');
define('LOGGED_IN_KEY',    'r_fnNuaT=bUJhY/*lRmlD?h2 G~3(;QEaJVCW65Ii%d7t/F>V%M{ll~TkgGkr]=r');
define('NONCE_KEY',        'GYZGd#/g3d4[+[TA>/&3UfG&SgA8tX!4c!,pQSTU?1s lt3u%hXCBUE5<Y]<(lC|');
define('AUTH_SALT',        './TIuyLs%$PE1,9}5y+cialab)8TH4=e|4nb72s)/e|Fzk9OsSV 45f@J?vLiluK');
define('SECURE_AUTH_SALT', '3J /eSZB[!?2VcUD]Q:7}T]4lhJUs%: |:rlX{dx44d<}~FyZQ.XTSY%&@$!F f.');
define('LOGGED_IN_SALT',   '}y;olFPv8U +2a3-kp^d:&+p_F%LWCbcd5N@_-}4|qC!3=h~YS@CUYK[:5@_:-:$');
define('NONCE_SALT',       'k km>)XO6.?WI6(qffS=mB-Gjd;lV]{,txC->M#DGm_Z]pI3]+xw6d}CEGQ ]3E3');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
